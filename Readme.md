# E-Learning Course Recommendation System

This project is an e-learning course recommendation system developed using Python. The system reads course data, preprocesses it, and recommends similar courses based on a given input course. The recommendation is based on text vectorization and similarity metrics.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Details](#project-details)
- [Credits](#credits)


## Installation

To run this project locally, you'll need to have Python installed. The required libraries can be installed using the following command:

```bash
pip install numpy pandas matplotlib scikit-learn nltk


## Usage
- Clone the repository.
- Ensure you have the required dataset (Coursera.csv) in the correct path (/content/Coursera.csv).
-Run the Backend.ipynb Jupyter notebook.


## Project Details
Technical Methods Used

1. Data Cleaning and Preprocessing
String Replacement: Removing spaces and special characters from course names, descriptions, and skills to standardize the text data.
2. Feature Engineering
Tag Creation: Combining relevant columns (Course Name, Difficulty Level, Course Description, and Skills) into a single tags column to create a comprehensive feature for each course.
3. Text Vectorization
CountVectorizer: Converting the tags text data into numerical vectors using the CountVectorizer from scikit-learn. This helps in transforming the text into a format suitable for machine learning algorithms.
4. Text Normalization
Stemming: Using the Porter Stemmer from the nltk library to reduce words to their root form. This helps in minimizing the feature space and improving the accuracy of the similarity calculations.
5. Similarity Calculation
Cosine Similarity: Calculating the cosine similarity between the course vectors to measure the similarity between different courses. This metric is used to find and recommend courses that are similar to a given input course.
6. Model Training-->> testing

## Credits
Subhangi Sati
