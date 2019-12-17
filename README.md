# WGU Computer Science Capstone project
A Jupyter Notebook and React.js project. The Notebook uses feature engineering, Baseline model and other Machine Learning techniques to analyze and classify comments into 5 levels of toxicity {Clean, Toxic, Sevear Toxic, Identify Hate, Identify Threat}.
The React.js application uses the Tensorflow.js library to analyze comments in real-time, applying both the proper level of toxicity and what its percentile of likely hood is.
The paper was written to meet the WGU Grading Rubric and most of it is meaningless. It does give an overview of the functionalities of the applications.

Installation has only been tested on Mac platforms with Anaconda installed; be sure to select the Python 3.7 version with the following: 
# STEP 1: 
Download and install Node.js and Anaconda from the following URLs:
* Node.js - https://nodejs.org/en/
* Anaconda – https://www.anaconda.com/distribution/#download-section 
# STEP 2: 
Extract the capstone project form the submitted zip folder. 
# STEP 3: 
Open a terminal window and enter the following commands:  
* easy_install matplotlib-venn
* pip install -U spacy
* sudo python -m nltk.downloader -d /usr/local/share/nltk_data all
* conda install jupyter_dashboards -c conda-forge
# STEP 4: 
Navigate to the Capstone using the terminal and enter the following command:
* sudo npm install  
* jupyter trust notebook.ipynb
This will download and install the node modules need for the React.js application.   
# STEP 5: 
To run the React.js application, type the following command into the terminal:
* npm start
To run the Jupyter Notebook
* open the Anacondas Dashboard and launch Jupyter Notebooks. 
* Notebooks is loaded navigate to the location of where you have the extracted capstone folder. 
* Click on the nb2.ipynb file to launch the Notebook. 
# STEP 6: 
If you followed the above steps correctly, you should now have two browser windows open. One for the notebook and one for the react application. 
## Running the Jupyter Notebook application:
Click run in each cell or click run all in the Jupyter Notebook to perform a new run of the testing and trained data and all features. 
#### NOTE: this may take several minutes depending on how powerful your computer is. 
#### NOTE: if you are using a windows computer to run this application, several of the cells will run out of memory before the final calculations can be completed. Do not run this on a windows computer.
## Running the React.js Application:
To run the React.js application, simply type into the add a comment form and submit. The data will then be classified using the Tensorflow.js library and its predicted result returned and populated into the table on the right.
The toxic graph will update after submit with a calculation of the previous data in a bar graph. 
#### NOTE: This means that the graph is always one comment behind. So, if you have posted two comments into the table only one will show on the graph. 
