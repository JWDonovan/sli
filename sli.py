from flask import Flask, render_template, request
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
  if request.method == 'POST':
    return "Post"
  return render_template('index.html')

@app.route('/calculator/', methods=['POST'])
def calculate():
  if request.method == 'POST':
    #return request.form['calculator-amount']
    #return request.form['calculator-date']
    return request.form['calculator-frequency']
  #else:
  #  return render_template('index.html')

if __name__ == "__main__":
  app.run(host='0.0.0.0')
