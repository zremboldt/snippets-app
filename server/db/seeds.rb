# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)


######################################################################
# Tear it down
######################################################################

Snippet.destroy_all
Collection.destroy_all



######################################################################
# Create collections
######################################################################

Collection.create!([
  {
    id: 1,
    name: "Design quotes",
  },
  {
    id: 2,
    name: "Illustration",
  },
  {
    id: 3,
    name: "Architecture",
  },
])

puts "Created #{Collection.count} collections."



######################################################################
# Create snippets
######################################################################

Snippet.create!([
  {
    id: 1,
    note: "“Design is the intermediary between information and understanding.” – Hans Hofmann",
    collection_id: 1,
  },
  {
    id: 2,
    note: "“Design is thinking made visual.” – Saul Bass",
    collection_id: 1,
  },
  {
    id: 3,
    note: "“When you’re curious, you find lots of interesting things to do.” – Walt Disney",
    collection_id: 1,
  },
  {
    id: 4,
    note: "“The details are not the details. They make the design.” – Charles Eames",
    collection_id: 1,
  },
  {
    id: 5,
    note: "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle",
    collection_id: 1,
  },
  {
    id: 6,
    note: "“Whitespace is like air: it is necessary for design to breathe.” – Wojciech Zieliński",
    collection_id: 1,
  },
  {
    id: 7,
    note: "“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” – Charles Eames",
    collection_id: 1,
  },
  {
    id: 8,
    note: "“Look at usual things with unusual eyes.” – Vico Magistretti",
    collection_id: 1,
  },
  {
    id: 9,
    note: "“To design is much more than simply to assemble, to order, or even to edit: it is to add value and meaning, to illuminate, to simplify, to clarify, to modify, to dignify, to dramatize, to persuade, and perhaps even to amuse. To design is to transform prose into poetry.” – Paul Rand",
    collection_id: 1,
  },
  {
    id: 10,
    note: "“If you think good design is expensive, you should look at the cost of bad design.” – Ralf Speth",
    collection_id: 1,
  },
  {
    id: 11,
    note: "“It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.” – Don Norman",
    collection_id: 1,
  },
  {
    id: 12,
    note: "“Styles come and go. Good design is a language, not a style.” – Massimo Vignelli",
    collection_id: 1,
  },
  {
    id: 13,
    note: "“How well we communicate is determined not by how well we say things, but how well we are understood.” – Andrew Grove",
    collection_id: 1,
  },
  {
    id: 14,
    note: "“If I had asked people what they wanted, they would have said faster horses.” – Henry Ford",
    collection_id: 1,
  },
  {
    id: 15,
    note: "“Any intelligent fool can make things bigger and more complex. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” – E. F. Schumacher",
    collection_id: 1,
  },
  {
    id: 16,
    note: "“A user interface is like a joke. If you have to explain it, it’s not that good.” – Martin LeBlanc",
    collection_id: 1,
  },
  {
    id: 17,
    note: "“Design isn’t crafting a beautiful textured button with breathtaking animation. It’s figuring out if there’s a way to get rid of the button altogether.” – Edward Tufte",
    collection_id: 1,
  },
  {
    id: 18,
    note: "“Certainty is a closing of the mind. To create something new you must have doubt.” – Milton Glaser",
    collection_id: 1,
  },
])
  
illustration_snippets = Snippet.create([
  {
    id: 19,
    title: "Mountains!",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "https://www.pinterest.com/pin/421508846380710927/feedback/?invite_code=3fb1fd4481be463488c23ba221c138c8&sender_id=803400158435010220",
    collection_id: 2,
    image_width: 1920,
    image_height: 1080,
  },
  {
    id: 20,
    title: "Mountains the second",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_width: 1199,
    image_height: 900,
  },
  {
    id: 21,
    title: "A-frame in the woods",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_width: 731,
    image_height: 882,
  },
  {
    id: 22,
    title: "Mama bear with her cubs",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_width: 564,
    image_height: 769,
  },
])

illustrations = [
  'lorenzo-lanfranconi-1.jpg',
  'lorenzo-lanfranconi-2.jpg',
  'a-frame.jpg',
  'bears.jpg',
]

illustration_snippets.each_with_index do |snippet, index|
  snippet.image.attach(
    io: File.open(Rails.root.join("app/assets/images/#{illustrations[index]}")), 
    filename: illustrations[index]
  )
end

puts "Created #{Snippet.count} snippets."
