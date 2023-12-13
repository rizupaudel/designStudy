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
                pname = k.split("_")               
                pid = pname[0].strip('p')
                if 'p8' in k:
                    dorder = pname[3]
                    dname = pname[4]
                    if surv_resp.get('8'):
                        v = surv_resp.get('8').update(v)
                surv_resp[pid].update(json.loads(v))
            elif 'time' in k:
                temp = k.split("_")
                pid = temp[0]
                if (str(pid) == '2'):
                    pid = '0'
                if (str(pid) == '4'):
                    pid = '3'
                time_resp[pid] = float(v)

    except Exception as e:
        # print(f'{fname}: {e}')
        pass
    return False


def get_questions():
    questions = {}
    for page_id in [3, 7, 8, 12, 14]:
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
                if responses == "not attentive":
                    count[0] += 1
                else:
                    count[1] += 1
                    pss, tim, sur, didr = responses
                    if not pss.get('password1'):
                        sur.pop('5', None)
                        sur.pop('9', None)
                        sur.pop('13', None)
                        
                        if (not did):
                            password_response.append(pss)
                            time_response.append(tim)
                            survey_response.append(sur)
                            dids.append(didr)
                        elif (str(did) == str(didr)):
                            count[2] += 1
                            password_response.append(pss)
                            time_response.append(tim)
                            survey_response.append(sur)

    if did:
        print(f"Total: {count[2]}")
        return (password_response, time_response, survey_response)
    else:
        print(f"Total: {count[0]+count[1]}; \nAttentive: {count[1]}; Non Attentive: {count[0]}")
        return (password_response, time_response, survey_response, dids)


def get_design(did):
    return did_map.get(int(did))


def get_hash(password, salt=""):
    return hashlib.md5(password.encode("utf-8")).hexdigest()
