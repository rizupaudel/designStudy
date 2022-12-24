import os
import json
from collections import defaultdict


fpath = '../responses'
qpath = '../questions/'

page_map = {
    '0': 'startstudy',
    '1': 'fpass',
    '2': 'fcog',
    '3': 'fpasssurvey',
    '4': 'fpassrecall',
    '5': 'pagegif',
    '6': 'desinint',
    '7': 'quest',
    '8': 'csquest',
    '9': 'motivation',
    '10': 'spass',
    '11': 'scog',
    '12': 'spasssurvey',
    '13': 'spassrecall',
    '14': 'demo',
    '15': 'thanks',
}

attention = {
   '7': {
      '1-6' : 7
   },
   '8': {
      '2-1' : 6,
      '6-1' : 1
   },
   '12': {
      '4-1': 2
   }
}

def get_response(fname):
    try:
        with open(fname, 'r') as f:
            data = f.read()
        response = json.loads(data)
        surv_resp = defaultdict(dict)
        pass_resp = defaultdict(str)
        time_resp = defaultdict(str)
        did = ''

        for k, v in response.items():
            if 'response' in k:
                temp = k.split("_")
                pid = temp[0].strip('p')
                v = json.loads(v)
                surv_resp[pid].update(v)
            elif 'time' in k:
                temp = k.split("_")
                pid = temp[0]
                time_resp[pid] = float(v)
            elif 'password' in k:
                pass_resp[k] = v
            elif 'did' in k:
                did = v
        return (pass_resp, time_resp, surv_resp, did)
    except Exception as e:
        print(f'{fname}: {e}')


def get_questions():
    questions = {}
    for page_id in [3, 7, 8, 12, 14]:
        page_name = page_map.get(str(page_id))
        question_file = f'{page_name}.json'

        with open(f'{qpath}{question_file}', 'r') as f:
            questions[str(page_id)] = json.loads(f.read())
    return questions


def get_qdetails(pid, qsid):
    questions = get_questions()
    pid = str(pid)
    qid, sid = qsid.split('-')
    if not questions.get(pid): return "Page ID not found."
    ret_text = ""
    for question in questions.get(pid):
        if question.get('qid') == int(qid):
            ret_text += question.get('text')
            for subquestion in question.get('subquestions'):
                if subquestion.get('sid') == int(sid):
                    ret_text += '\n' + str(subquestion)
    return ret_text


def get_responses(did=False):
    password_response = []
    time_response = []
    survey_response = []
    dids = []
    for fname in os.listdir(fpath):
        if fname.endswith('.json'):
            responses = get_response(os.path.join(fpath, fname))
            if responses:
                pss, tim, sur, didr = responses
                if not pss.get('password1'):
                    sur.pop('5', None)
                    sur.pop('9', None)
                    sur.pop('13', None)
                    if (did):
                        if (str(did) == str(didr)):
                            password_response.append(pss)
                            time_response.append(tim)
                            survey_response.append(sur)
                    else:
                        password_response.append(pss)
                        time_response.append(tim)
                        survey_response.append(sur)
                        dids.append(didr)
    if did:
        return (password_response, time_response, survey_response)
    else:
        return (password_response, time_response, survey_response, dids)