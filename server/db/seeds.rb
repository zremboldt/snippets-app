# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

######################################################################
# Create snippets
######################################################################

Snippet.destroy_all

Snippet.create([
  {
    id: 1,
    note: "“Design is the intermediary between information and understanding.” – Hans Hofmann",
  },
  {
    id: 2,
    note: "“Design is thinking made visual.” – Saul Bass",
  },
  {
    id: 3,
    note: "“When you’re curious, you find lots of interesting things to do.” – Walt Disney",
  },
  {
    id: 4,
    note: "“The details are not the details. They make the design.” – Charles Eames",
  },
  {
    id: 5,
    note: "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle",
  },
  {
    id: 6,
    note: "“Whitespace is like air: it is necessary for design to breathe.” – Wojciech Zieliński",
  },
  {
    id: 7,
    note: "“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” – Charles Eames",
  },
  {
    id: 8,
    note: "“Look at usual things with unusual eyes.” – Vico Magistretti",
  },
  {
    id: 9,
    note: "“To design is much more than simply to assemble, to order, or even to edit: it is to add value and meaning, to illuminate, to simplify, to clarify, to modify, to dignify, to dramatize, to persuade, and perhaps even to amuse. To design is to transform prose into poetry.” – Paul Rand",
  },
  {
    id: 10,
    note: "“If you think good design is expensive, you should look at the cost of bad design.” – Ralf Speth",
  },
  {
    id: 11,
    note: "“It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.” – Don Norman",
  },
  {
    id: 12,
    note: "“Styles come and go. Good design is a language, not a style.” – Massimo Vignelli",
  },
  {
    id: 13,
    note: "“How well we communicate is determined not by how well we say things, but how well we are understood.” – Andrew Grove",
  },
  {
    id: 14,
    note: "“If I had asked people what they wanted, they would have said faster horses.” – Henry Ford",
  },
  {
    id: 15,
    note: "“Any intelligent fool can make things bigger and more complex. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” – E. F. Schumacher",
  },
  {
    id: 16,
    note: "“A user interface is like a joke. If you have to explain it, it’s not that good.” – Martin LeBlanc",
  },
  {
    id: 17,
    note: "“Design isn’t crafting a beautiful textured button with breathtaking animation. It’s figuring out if there’s a way to get rid of the button altogether.” – Edward Tufte",
  },
  {
    id: 18,
    note: "“Certainty is a closing of the mind. To create something new you must have doubt.” – Milton Glaser",
  },
])

# Snippet.create([
#   {
#     id: 19,
#     title: "Mountains!",
#     note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
#     link: "https://www.pinterest.com/pin/421508846380710927/feedback/?invite_code=3fb1fd4481be463488c23ba221c138c8&sender_id=803400158435010220",
#     image_width: 1920,
#     image_height: 1080,
#   }
# ])

puts "Created #{Snippet.count} snippets."

######################################################################
# Create collections
######################################################################

Collection.destroy_all

Collection.create([
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