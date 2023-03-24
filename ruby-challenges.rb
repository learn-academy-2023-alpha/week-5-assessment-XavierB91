# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.
# Psuedocode: What do I want to do ?Return an array of all the words containg a particual letter. How do I do this ? create a method called result that takes in an array of words and a single letter. How will this method accomplish this ? : the Result method will be called by using the select method on beverage_array, I will use the select method to locates and returns elements in the array that matches a condition I specify such as containing the letter 'o' or 't' . .The select method  constructs a new array containing all of the elements that match the condition, instead of just returning a single value and stopping.

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
result = beverages_array.select {|item| item.include?(letter_t)}
print result
result = beverages_array.select {|item| item.include?(letter_o)}
print result
# actual output : ["coffee", "soda water"]
# actual output : ["tea", "water", "soda water"]
# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'
# Psuedocode : What do I want to do ? My primary objective is to create a method that returns one array with all the hash values at thier own index and in alphabetical order. My secondary object will be to ensure that they're no nested arrays within the return array. How will I accomplish these objectives ?
# I believe I can sort through the array via the value of the keys and use the sort_by method in ruby to sort the hash by value. 
# flatten - remove array
# .eachvalue- not create nested arrays 
us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

 

# (Final attempt/attempt 3) needs a refactor was unable to get an array. 😥
us_states.keys.sort_by { |key| us_states[key] }.each do
    |key|
        puts us_states[key].sort
    end

    # output : Arizona
# California
# Nevada
# Maine
# New Hampshire
# Rhode Island
# Idaho
# Oregon
# Washington

# (attempt 2) 
# us_states.each do | key,value|
    
# end
# print us_states.flatten.

#(attempt1 ) us_states.each do 
#     |value|
# end
# print us_states.map(&:last)




# (attempt 1) us_states.each_with_index do | hash_index|
#     puts us_states.flatten
# end


# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object

# Psuedocode: Create a class called Bike? what does this class do ? Classes are the basic building blocks in Object-Oriented Programming (OOP) & Ruby. Classes  help you define a blueprint for creating objects.# Objects are the products of the class. I want to use the Bike Class to be a container of methods, instance variables & constants, forming a blueprint which I can create objects from.
# I want my Bike class to hold on to instances of model, wheels, and current_speed with specific numeric values. 
# Let’s define a class Bike. Bike's have a model, have wheels, and have speed rates.

#     Here’s how to define a  new, empty class Bike:
    
#     class Bike
#     end
    
#     It's not a very useful class, but we can instantiate it, and create an actual, concrete Bike instance (object) from it:
    
#     p Bike.new
#     Now, before I add any behaviour (methods) to the class, I want to be able to give it some initial data: In my case, I want the car to know its model type, current speed and wheels .
#     I can do this like so:
#     class Bike
#       def initialize(model, wheels, current_speed)
#       end
#     end
#     You see that we add a method called initialize to the class, and this method accepts a three argumens, which is called model, wheels and current_speed. At the moment, this method is still empty. I'll add some code to it. the method initialize is a special method with a special meaning in Ruby:
#     Whenever you call the method new on a class, as in method.new, the class will create a new instance of itself. It will then, internally, call the method initialize on the new object. Doing so it will simply pass all the arguments that you passed to new on to the method initialize.   
#     So we can now create a new Bike instance by calling …
#     Bike.new("Trek")
#     … and the string "Trek" will be passed on to our initialize method, and end up being assigned to the local variable .
class Bike
    attr_accessor :model, :wheels, :current_speed
   def initialize(model,wheels,current_speed)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
   end
   def bike_info
    puts "The #{@model} has #{@wheels}  and is going #{@current_speed}"
end
end


# my_bike = Bike.new('Trek','2 wheels','0 mph')

print my_bike.bike_info
# output: The Trek has 2 wheels  and is going 0 mph


# (attempt 1)class Bike
#     def initialize (model,wheels,current_speed)
#         @model = model
#         @wheels = wheels
#         @current_speed = current_speed
#     end
# end


# # Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds. Pseduocode: What do I want to do ? add the ability to pedal faster and brake to my Bike Class. How will I do this ? I can create two methods to add to the Bike class, the pedal_faster method will increase the speed by a given amount. the brake method will decrease the speed by an given amount. The methods will probably affect the current_speed instance variable?

# Ok I'm offically stumped about how to go about solving this challenge, I believe the numbers are causing me the majority of my grienvences. I don't really know how to manipulate the actual syntax to create the pedal_faster and brake method.  Defintely need a refactor, I'm unable to keep the numbers from going into the negatives when calling upon the brake method.
class Bike
    attr_accessor :model, :wheels, :current_speed,
   def initialize(model,wheels,current_speed)
    @model = model
    @wheels = wheels
    @current_speed = current_speed
   end
 def pedal_faster(new_speed)
    @new_speed = new_speed
    p "#{new_speed += 10}" 
  end
  def brake(new_speed)
    @new_speed = new_speed
    p "#{new_speed -= 25}" 
  end
end



my_bike = Bike.new
print my_bike.pedal_faster(0)
print my_bike.pedal_faster(18)
print my_bike.brake(5)
print my_bike.brake(25)

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0
