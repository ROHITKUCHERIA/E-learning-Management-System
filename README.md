# E-learning Management System

The main purpose is to develop a web platform named “E-College” which will aim to
help students to get all resources & study Matrial of every course available. It will
also give the “E-Notes”, “PPT’s” and “Video Lactures “ facility.

Modules of Learning Management System
==
Our System has two main interfaces one for Admin Panel and second for Student
and other is Guest session . Along with these, we have other interfaces which can be
discussed as below:

Registration
==
User data needs to be registered in the Learning management system so as to use
the system and add the Student’s details, and add the Parent’s details.Login:
After registration one can log in the system as the operator of the system on the
behalf of the user. After this, he has the other user interfaces available for further
actions.

Admin panel
==
There can be only one account of the admin for a class. Admin can add the users.
When a user tries to register on the Learning management system then the request
goes to admin and if the admin verifies only then the user can register itself on it.
Other privileges that admin has been explained below:
* He can Login through his id and password. The password is made very secure so
that no person can guess and make it difficult for hackers to crack.
* He has access to his own and he can search details of other Users and can see the
details of him.
* This admin is responsible for creating and uploading the menu card to every User in
the Interface.
* He can add a user to that account and give access to for handling the class on their
own.

Technology Stack 
==
In our project we are using html and CSS , as a front-end of our project & Python ,
Django & SQLite for the back-hand.

Technologies Used:
==
`HTML`, `CSS`, `MYSQL`, `LocalHost Server`, `Django`.and `pythonanywhere` for Host our
platform.

Django
======

Django is a high-level Python web framework that encourages rapid development
and clean, pragmatic design. Thanks for checking it out.

All documentation is in the "``docs``" directory and online at
https://docs.djangoproject.com/en/stable/. If you're just getting started,
here's how we recommend you read the docs:

* First, read ``docs/intro/install.txt`` for instructions on installing Django.

* Next, work through the tutorials in order (``docs/intro/tutorial01.txt``,
  ``docs/intro/tutorial02.txt``, etc.).

* If you want to set up an actual deployment server, read
  ``docs/howto/deployment/index.txt`` for instructions.

* You'll probably want to read through the topical guides (in ``docs/topics``)
  next; from there you can jump to the HOWTOs (in ``docs/howto``) for specific
  problems, and check out the reference (``docs/ref``) for gory details.

* See ``docs/README`` for instructions on building an HTML version of the docs.

Docs are updated rigorously. If you find any problems in the docs, or think
they should be clarified in any way, please take 30 seconds to fill out a
ticket here: https://code.djangoproject.com/newticket

To get more help:

* Join the ``#django`` channel on ``irc.libera.chat``. Lots of helpful people
  hang out there. See https://web.libera.chat if you're new to IRC.

* Join the django-users mailing list, or read the archives, at
  https://groups.google.com/group/django-users.

To contribute to Django:

* Check out https://docs.djangoproject.com/en/dev/internals/contributing/ for
  information about getting involved.

To run Django's test suite:

* Follow the instructions in the "Unit tests" section of
  ``docs/internals/contributing/writing-code/unit-tests.txt``, published online at
  https://docs.djangoproject.com/en/dev/internals/contributing/writing-code/unit-tests/#running-the-unit-tests

Supporting the Development of Django
====================================

Django's development depends on your contributions. 

If you depend on Django, remember to support the Django Software Foundation: https://www.djangoproject.com/fundraising/

This is the source code from the end-of-lifed https://www.projectdirigible.com project, preserved for posterity and the curious

Installation instructions
=
cd Folder_name\
pip install -r requirements.txt\
python manage.py migrate  \
python manage.py createsuperuser  [//]: <> (make yourself a user account.)\
python manage.py runserver

And visit http://localhost:8000

Getting started
---------------

* You'll need Django installed, and some way of hosting it -- the default
  runserver, Apache with mod_wsgi, or (of course) a
  [PythonAnywhere](http://www.pythonanywhere.com) account.\
* if you're on PythonAnywhere, you'll have it already. If not, `pip install south`.
* `git checkout git://github.com/ROHITKUCHERIA/E-learning-Management-System.git`
* `cp local_settings_template.py local_settings.py`
* Edit `local_settings.py`, and change the variables in there to point to an
  appropriate database etc.  The email fields are optional, just
  miss them out if we don't want to use them.

* `python manage.py migrate`

Log in to the admin GUI using the admin username you
created 

