# ASSESSMENT 5: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What does calling super do in a Ruby class?

Your answer: to my current level of understanding using the keyword super in Ruby will call upon the parent class  with the same name from within a method. 

Researched answer: The super keyword in Ruby is a straightforward thing; it simply calls the same method from a parent class. Ruby gives us a built-in function called super that allows us to call methods which are present in its super class. The key word super can only be used inside a method . It returns the result from calling the parent method and it can be called multiple times.The use of inheritance is to make the overridden methods in a subclass do something additional to what the method in the super class did. This allows us to modify the needs of the subclass.
For example:
If you call a method named i_like_videogames, and then you call super within that method, Ruby will try to find another method with that same name i_like_videogames on the parent  of whoever owns this method. 
Resources:  https://www.paweldabrowski.com/articles/super-keyword-in-ruby
https://www.rubyguides.com/2018/09/ruby-super-keyword/


2. What is a gem?

Your answer: I believe a gem is ruby is basically package manager that holds small pieces of functional code that can be used by developers in Ruby. Gems allow you to access and use code within their programs without hard coding it into the program. 

Researched answer: A ruby gem is an individually packaged Ruby library. Gems are a packing system for ruby programs and libraries that enables developers to package their ruby libraries in a form that allows for enhanced user maintenance  and installation. Ruby gems allows you to manage different versions of the same libraries on your machine and install them to your machine with an single line command prompt.RubyGems is a tool designed to easily manage the installation of gems (code  that is self-contained within a format called a "gem" ), and a server for distributing them. 
resources: https://en.wikipedia.org/wiki/RubyGems
https://medium.com/@morgannegagne/what-is-a-ruby-gem-1eec2684e68



3. What is a relational database? Are there other kinds of databases?

Your answer:off of the top of my head I believe a relational database is an collection of related data stored in tables that can be accessed by an developer. I do believe there are other forms of database other than relational, however I'm currently lacking in knowledge regarding the other kinds.I will do further research on this question and get back to you with a more sufficient answer.


Researched answer:  a relational database organizes specific pieces and types of data into rows and columns, which together for a table. Data within a relational database is structured across multiple tables which are joined (relational) together via a primary key or a foreign key.  These ID's (primary key and foreign key) demonstrate the different relationships that exist between tables.   Relational databases work best when the data they contain are static and don't change often.There are other kinds of databases other than relational such as non-relational databases. The main difference between these is how they store their information.A non-relational database stores data in a non-tabular form, and tends to be more flexible than the traditional, SQL-based, relational database structures. It does not follow the relational model provided by relational databases. Non-relational databases are often used when large qualities of complex and diverse data need to be organized. Non-relational databases are ideal for storing data that may be changed frequently or for programs that handle many different kinds of data. 
Resources: https://www.ibm.com/topics/relational-databases
https://www.learnhowtoprogram.com/ruby-and-rails/ruby-database-basics/relational-database-concepts
https://www.mongodb.com/databases/non-relational



4. What are primary keys? Why are they important?

Your answer: Primary keys in rails are unique identifiers within database. Primary keys are important because they allow developers to access certain values within large swaths of information contained within a database. 

Researched answer: a primary key is an field or collection of fields, whose values uniquely identify each record within a table. (each ID is unique). Primary keys are important because they are used to identify each record because there can't be more than one instance in the table(once again each primary key is unique). A database table must have a primary key to insert, update, restore or delete data from a database table. 

resources: https://www.jetbrains.com/help/ruby/primary-keys.html#:~:text=A%20primary%20key%20contains%20unique,of%20single%20or%20multiple%20columns.


5. What are the HTTP verbs? What is each verb's corresponding CRUD action?

Your answer: HTTP verbs are a set of methods that are used to indicate an desired action to be performed for a given program. The primary HTTP verbs we use are get, put, delete and post. Each verb has an corresponding CRUD action.  Read/Retrieve is represented by Get, Update is represented by Put, Create is represented by Post and Delete is represented by delete.

Researched answer:The primary or most-commonly-used HTTP verbs (or methods, as they are properly called) are POST, GET, PUT, and DELETE. These correspond to create, read, update, and delete (or CRUD) operations, respectively. Get is used to retreive data from a server at the specified resource. Post methods are used to send data to the API server to create or update a resource.Concurrently, Put request are used to send data to the API to update or create a resource, the difference between the two is that calling the same Put request multiple times will create the same resource multiple times. Lastly, the delete method deletes the resource at the specified URL called upon.  Resources : https://assertible.com/blog/7-http-methods-every-web-developer-should-know-and-how-to-test-them
https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. RESTful routes:
RESTful routing is a set of standards used in many different languages to create efficient, reusable routes. It aims to map HTTP methods (GET, POST, PATCH, DELETE) and CRUD actions (Create, Read, Update, Destroy) together in a conventional pattern. This makes it easier for other developers to understand and navigate an application and results in clean, consistent URL paths for users. Essentially, RESTful routing is a naming pattern. It asserts that routes completing certain common actions (like creating, updating, or deleting objects) have names and paths that accurately reflect what they're doing, with which CRUD and HTTP verbs, on what type of object.
resources: https://www.learnhowtoprogram.com/c-and-net/basic-web-applications/introduction-to-restful-routing#:~:text=RESTful%20routing%20is%20a%20set,together%20in%20a%20conventional%20pattern.

2. Model validations: Model validation methods  help ensure that data stored in your database is consistent and meets certain criteria. These validations can be specified directly in your model files, making them easy to manage and maintain. resources : https://dev.to/daviducolo/rails-model-validation-a-comprehensive-guide-with-code-examples-21mh

3. Params: Basically, parameters are user specified data to rails application.
The params come from the user's browser when they request the page. For an HTTP GET request, which is the most common, the params are encoded in the URL. For example, if a user's browser requested

http://www.example.com/?foo=1&boo=octopus

then params[:foo] would be "1" and params[:boo] would be "octopus".

In HTTP/HTML, the params are really just a series of key-value pairs where the key and the value are strings, but Ruby on Rails has a special syntax for making the params be a hash with hashes inside. For example, if the user's browser requested

http://www.example.com/?vote[item_id]=1&vote[user_id]=2

then params[:vote] would be a hash, params[:vote][:item_id] would be "1" and params[:vote][:user_id] would be "2".
resources:https://stackoverflow.com/questions/6885990/rails-params-explained

4. ERB:ERB provides an easy to use but powerful templating system for Ruby. Using ERB, actual Ruby code can be added to any plain text document for the purposes of generating document information details and/or flow control.

A very simple example is this:

require 'erb'

x = 42
template = ERB.new <<-EOF
  The value of x is: <%= x %>
EOF
puts template.result(binding)
Prints: The value of x is: 42
resources : https://github.com/ruby/erb


5. API: API is the acronym for application programming interface — a software intermediary that allows two applications to talk to each other. APIs are an accessible way to extract and share data within and across organizations.

APIs are all around us. Every time you use a rideshare app, send a mobile payment, or change the thermostat temperature from your phone, you’re using an API.When you use one of the above apps, they connect to the Internet and send data to a server. The server then retrieves that data, interprets it, performs the necessary actions, and sends it back to your phone. The application then interprets that data and presents you with the information you wanted in a readable way. What are the characteristics of an API?

The term “API” has been generically used to describe connectivity interfaces to an application. However, over the years, the modern API has taken on some unique characteristics that have truly transformed the technology space. First, modern APIs adhere to specific standards (typically HTTP and REST), which enable APIs to be developer-friendly, self-described, easily accessible, and understood broadly.
resources: https://www.mulesoft.com/resources/api/what-is-an-api#:~:text=API%20is%20the%20acronym%20for,APIs%20are%20all%20around%20us.
