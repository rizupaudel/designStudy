import os

path = "./responses"
for fname in os.listdir(path):
    with open(os.path.join(path, fname), "r") as f:
        lines = f.read()
        lines = lines.strip()
        if (not lines):
            os.remove(os.path.join(path, fname))