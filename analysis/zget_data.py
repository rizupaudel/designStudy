import os, json, hashlib
from collections import defaultdict


fpath = '../responses'
qpath = '../questions/'

page_map = {
    '0': 'index',
    '8': 'csquest',
    '9': 'spasssurvey',
    '10': 'demo'
}

quest_map = {
    'Aesthetics': ["beautiful", "stylish", "appealing", "pleasant"],
    'Usefulness': ["useful", "helpful", "beneficial", "rewarding"],
}

pass_stmap = {
    'Very Weak': -3,
    'Weak': -1.5,
    'Medium': 0,
    'Strong': 1.5,
    'Very Strong': 3,
}


def get_response(fname):
    try:
        with open(fname, 'r') as f:
            data = f.read()
        response = json.loads(data)
        surv_resp = defaultdict(dict)
        time_resp = defaultdict(str)
        for k, v in response.items():
            if 'response' in k:
                val = {}
                for kt, vt in json.loads(v).items():
                    kk = kt.strip('-A').strip('-B').strip('-C')
                    val[kk] = vt
                pname = k.split("_")               
                pid = pname[0].strip('p')
                if 'p8_' in k:
                    dorder = pname[3]
                    dname = pname[4]
                    p8_response = surv_resp.get('8')
                    if p8_response:
                        if dname in p8_response.keys():
                            p8_response.get(dname).update(val)
                            surv_resp['8'].update(p8_response)
                        else:
                            surv_resp[pid].update({dname: val})
                    else:
                        surv_resp[pid].update({dname: val})
                else:
                    surv_resp[pid].update(val)
            elif '_time' in k:
                temp = k.split("_")
                pid = temp[0]
                time_resp[pid] = float(v)
        return surv_resp, time_resp
    except Exception as e:
        print(f'{fname}: {e}')
        pass
    return False


def get_questions():
    questions = {}
    for page_id in [0, 8, 9, 10]:
        page_name = page_map.get(str(page_id))
        question_file = f'{page_name}.json'

        with open(f'{qpath}{question_file}', 'r') as f:
            questions[str(page_id)] = json.loads(f.read())
    return questions


def get_qdetails(pid, qsid, key="text"):
    questions = get_questions()
    pid = str(pid)
    qid, sid = qsid.split('-')
    if not questions.get(pid): return "Page ID not found."
    ret_text = ""
    for question in questions.get(pid):
        if question.get('qid') == int(qid):
            ret_text += question.get(key)
            for subquestion in question.get('subquestions'):
                if subquestion.get('sid') == int(sid):
                    ret_text += '\n' + str(subquestion)
    return ret_text

def get_qinfo(pid, qid):
    questions = get_questions()
    pid = str(pid)
    qid = str(qid)
    if not questions.get(pid): return "Questions on given page not found."
    ret_text = ""
    for question in questions.get(pid):
        text = question.get('text')
        if question.get('qid') == int(qid):
            subquestion = question.get('subquestions')[0]
            if subquestion.get('type') == 'likert':
                text = subquestion.get('keyword')
            ret_text += text

    return ret_text


def get_responses(did=False):
    password_response = []
    time_response = []
    survey_response = []
    dids = []
    count = defaultdict(int)
    for fname in os.listdir(fpath):
        if fname.endswith('.json'):
            responses = get_response(os.path.join(fpath, fname))
            if responses:
                sur, tim = responses
                time_response.append(tim)
                survey_response.append(sur)
    return (survey_response, time_response)


def get_design(did):
    return did_map.get(int(did))


def get_hash(password, salt=""):
    return hashlib.md5(password.encode("utf-8")).hexdigest()
