import pickle
import pandas as pd
import numpy as np
import streamlit as st
import tensorflow as tf
from streamlit_option_menu import option_menu

def preprocess_inp(data):
    data = data.copy()

    data['Vegetable'] = data['Vegetable'].replace({
        'cabage': 1,
        'radish': 2,
        'potato': 3,
        'tomato ': 4,
        'peas': 5,
        'pumkin': 6,
        'cucumber': 7,
        'pointed grourd ': 8,
        'Raddish': 9,
        'Bitter gourd': 10,
        'onion': 11,
        'ginger': 12,
        'garlic': 13,
        'califlower': 14,
        'brinjal': 15,
        'okra': 16,
        'chilly': 17,
    })

    data['Deasaster Happen in last 3month'] = data['Deasaster Happen in last 3month'].replace({'no' : 0,'yes' : 1})

    data['Month'] = data['Month'].replace({
        'jan' : 1,
        'feb':2 ,
        'mar':3,
        'apr':4,
        'may':5,
        'jun':6 ,
        'jul':7,
        'aug':8,
        'sep':9,
        'oct':10,
        'nov':11,
        'dec' : 12,
        ' ' : np.NaN
    })

    data['Month'] = data['Month'].fillna(data['Month'].mode()[0])

    data['Vegetable condition'] = data['Vegetable condition'].replace({'fresh' : 0,'avarage':1,'scrap':2})

    data['Season'] = data['Season'].replace({'winter' : 0,'summer':1,'spring':2,'autumn': 3,'monsoon':4})
    
    return data

model = pickle.load(open("C:\\Users\\Mastermind\\Downloads\\sohailnb\\sohailnb\\model\\model.pkl",'rb'))

st.title('Vegetable Price Predictor')

col1,col2 = st.columns(2)
    
with col1:
        Vegetable = st.number_input("cabage -> 1 , radish -> 2 , potato -> 3 , tomato -> 4 , peas -> 5 , pumkin -> 6 , cucumber -> 7 , pointed grourd -> 8 , Raddish -> 9 , Bitter gourd -> 10 , onion -> 11 , ginger -> 12 , garlic -> 13 , califlower -> 14 , brinjal -> 15 , okra -> 16 , chilly -> 17")
        
with col2:
        Season = st.number_input("winter -> 0 , summer -> 1 , spring -> 2 , autumn -> 3, monsoon -> 4")
        
with col1:
        Temperature = st.number_input("In Degree Celsius")
        
with col2:
        Month = st.number_input("Jan -> 1 , Feb -> 2 ...")
        
with col1:
        Vegetable_Condition = st.number_input("Veg Condition(Fresh -> 0 , Average -> 1 , Scrap -> 2)")
        
with col2:
        Disaster_in_last_3months = st.number_input("Disaster happened(1->Yes , 0-> No)")

inp = ''

if st.button("Predict"):
       pred = model.predict([[int(Vegetable),int(Season),int(Temperature),
                              int(Month),int(Vegetable_Condition),int(Disaster_in_last_3months)]])
       
       st.write("predicted price : " , pred[0][0])

