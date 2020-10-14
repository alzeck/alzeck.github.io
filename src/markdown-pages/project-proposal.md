---
slug: "/research/statistics-project-proposal"
date: "2020-10-14"
title: "Students grading app proposal"
description: "Database proposal"
featuredImage: ./python-django-logo.jpg
---

<small> *Note: this proposal will contain some notations that i will try to keep explain the best i can* </small>

## Entities of interest for the database
We want to ensure our database contains all the elements needed to ensure the expected behaviour of the app, the main focus of the app are the reviews so lets start by introducing them

**Reviews**
- can be identified by the reviewer and the assignment it grades
- contains at least one grade 

**Students** 
- can be identified by the name or an username
- contains the link to the blog the student owns

we could define an assignment as the tuple (student,week) with this new expression we can introduce Reviews and Students in a more formal way: 

<div style="margin-left: 20px">

Students( <u>Username</u>, Blog )

Reviews( <u>Reviewer</u>, <u>Reviewee</u>,  <u>Week</u>, Grade* ) 
<div style="margin-left: 20px">
    F.K. Reviews[Reviewer] &#8838; Students[Username]<br>
    F.K. Reviews[Reviewee] &#8838; Students[Username]<br>
    Constraint: Reviews[Reviewer] != Reviews[Reviewee]<br>
</div>
</div>
<br>

F.K. stands for foreing key meaning the element of the tuple must be an identifier (key) for the entity it belongs, the * means the element can be empty, and the underlined attributes means they together are the Primary keys.

In simple words what the conditions under review mean are that the Reviewer and the reviewee must be an student, and that a reviewer cannot review it self. grade can be empty to remember the assigned homeworks to be reviewed for each student.

The next entity i would like to introduce are the ranks so that we can have a weekly rank of the best blogs and reviewers.
<div style="margin-left: 20px">
    Rank( <u>Student</u>, <u>Week</u>, blogGrade, ReviewerGrade )
    <div style="margin-left: 20px">
        F.K. Rank[Student] &#8838; Students[Username]<br>
    </div>
</div>

## Grading Algorithm Proposal

 - **Blog's grade:** mean average of the reviews given by students, in case of alliance penalization we could take x points from the after final grade for each corrupted review.

 - **Reviewer's grade:** since we assume each student wont be corrupt (in an ideal world) each student start with a perfect grade then we can subtract points for following reasons: 

    - false review, we can flag a review as corrupted if (review - avg)>threshold
    - uncompleted reviews, in case the reviewer didn't reviewed the assigned blogs

## Assigning blogs
Each thursday the system will assign 10 blogs to evaluate at each student (100 total) this in order to avoid alliances since each blog would have 10 reviewers and 
both reviewer and reviewee would get penalized for corrupt reviews.

## Extra notes
- Proposal: Divide the review's grade, in each category we want to consider for grading a blog
- I wanted to divide the ranking on the database as a weekly thing to keep track of the overall performance of a student (maybe an interesting case of study)
- Another case of study could be to study the relation of the blog's grade and the grade as a reviewer



