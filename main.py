from flask import Flask, render_template, request, jsonify
import numpy as np
from pandas import read_csv
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LinearRegression, Ridge, Lasso
from sklearn.neighbors import KNeighborsRegressor
from sklearn.neural_network import MLPRegressor
from sklearn.svm import LinearSVR, SVR
from sklearn.tree import DecisionTreeRegressor
from sklearn.ensemble import RandomForestRegressor, GradientBoostingRegressor
import warnings

app = Flask(__name__,template_folder='project_updated\project\templates\in.html')

# Load and preprocess data
data = read_csv('Vegetable_market.csv')
# ... Rest of the preprocessing code ...

# Models
models = {
    # ... Your model definitions ...
}

# Train models
for model in models.values():
    model.fit(X_train, y_train)

@app.route('/')
def home():
    return render_template('in.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        input_data = request.json
        # Process input_data if needed
        predictions = {}
        for name, model in models.items():
            prediction = model.predict(input_data)
            predictions[name] = prediction.tolist()
        return jsonify(predictions)
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
