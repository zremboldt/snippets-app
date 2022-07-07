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
Label.destroy_all



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

snippets_data = [
  {
    note: "“Design is thinking made visual.” – Saul Bass",
    collection_id: 1,
  },
  {
    note: "“The details are not the details. They make the design.” – Charles Eames",
    collection_id: 1,
  },
  {
    title: "Cévennes",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_filename: 'cevennes.jpg',
    image_width: 700,
    image_height: 875,
    label_names: ['Art', 'Painting', 'Brush Strokes', 'Outdoors', 'Old Car', 'Trees', 'Shade', 'Field', 'Countryside', 'Grassy', 'Road', 'Rural', 'Overgrown'],
  },
  {
    note: "“We are what we repeatedly do. Excellence, then, is not an act, but a habit.” – Aristotle",
    collection_id: 1,
  },
  {
    note: "“Whitespace is like air: it is necessary for design to breathe.” – Wojciech Zieliński",
    collection_id: 1,
  },
  {
    title: "The valley",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_filename: 'lorenzo-lanfranconi-2.jpg',
    image_width: 1199,
    image_height: 900,
    label_names: ['Mountains', 'Art', 'Painting', 'Outdoors', 'Trees', 'Deer', 'Stream', 'Water', 'Clouds', 'Meadow'],
  },
  {
    title: "Heather Martin",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: 'https://www.heatherihnart.com/collections/118488',
    collection_id: 2,
    image_filename: 'heather-martin.jpg',
    image_width: 555,
    image_height: 800,
    label_names: ['Art', 'Painting', 'Brush Strokes', 'Outdoors', 'Trees', 'Countryside', 'Grassy'],
  },
  {
    title: "High noon",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: 'https://www.pinterest.com/pin/486388828517486824/',
    collection_id: 2,
    image_filename: 'western-fortress.jpg',
    image_width: 1344,
    image_height: 763,
    label_names: ['Art', 'Painting', 'Outdoors', 'Desert', 'Castle', 'Cowboy', 'Landscape'],
  },
  {
    note: "“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” – Charles Eames",
    collection_id: 1,
  },
  {
    note: "“Look at usual things with unusual eyes.” – Vico Magistretti",
    collection_id: 1,
  },
  {
    note: "“To design is much more than simply to assemble, to order, or even to edit: it is to add value and meaning, to illuminate, to simplify, to clarify, to modify, to dignify, to dramatize, to persuade, and perhaps even to amuse. To design is to transform prose into poetry.” – Paul Rand",
    collection_id: 1,
  },
  {
    title: "Road to Rio",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: 'https://www.behance.net/gallery/56868611/The-road-to-Rio',
    collection_id: 2,
    image_filename: 'road-to-rio.jpg',
    image_width: 1920,
    image_height: 1223,
    label_names: ['Art', 'Water', 'Sea', 'Cliffs', 'Building', 'Landscape'],
  },
  {
    note: "“If you think good design is expensive, you should look at the cost of bad design.” – Ralf Speth",
    collection_id: 1,
  },
  {
    note: "“It is not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and, yes, beauty to people’s lives.” – Don Norman",
    collection_id: 1,
  },
  {
    note: "“Styles come and go. Good design is a language, not a style.” – Massimo Vignelli",
    collection_id: 1,
  },
  {
    title: "Summer landscape",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: 'https://www.pinterest.com/pin/182044009909542612/',
    collection_id: 2,
    image_filename: 'summer-landscape.jpg',
    image_width: 1000,
    image_height: 668,
    label_names: ['Art', 'Painting', 'Brush Strokes', 'Outdoors', 'Trees', 'Countryside', 'Grassy', 'Hills'],
  },
  {
    note: "“If I had asked people what they wanted, they would have said faster horses.” – Henry Ford",
    collection_id: 1,
  },
  {
    note: "“Design isn’t crafting a beautiful textured button with breathtaking animation. It’s figuring out if there’s a way to get rid of the button altogether.” – Edward Tufte",
    collection_id: 1,
  },
  {
    note: "“A user interface is like a joke. If you have to explain it, it’s not that good.” – Martin LeBlanc",
    collection_id: 1,
  },
  {
    title: "Mountains!",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    link: "https://www.pinterest.com/pin/421508846380710927/feedback/?invite_code=3fb1fd4481be463488c23ba221c138c8&sender_id=803400158435010220",
    collection_id: 2,
    image_filename: 'lorenzo-lanfranconi-1.jpg',
    image_width: 1920,
    image_height: 1080,
    label_names: ['Art', 'Outdoors', 'Landscape', 'Mountains', 'Grassy', 'Clouds', 'Trail', 'Rocks'],
  },
  {
    note: "“When you’re curious, you find lots of interesting things to do.” – Walt Disney",
    collection_id: 1,
  },
  {
    note: "“Design is the intermediary between information and understanding.” – Hans Hofmann",
    collection_id: 1,
  },
  {
    note: "“Certainty is a closing of the mind. To create something new you must have doubt.” – Milton Glaser",
    collection_id: 1,
  },
  {
    title: "Mama bear with her cubs",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_filename: 'bears.jpg',
    image_width: 564,
    image_height: 769,
    label_names: ['Art', 'Outdoors', 'Forest', 'Mountains', 'Grassy', 'Bears', 'Meadow', 'Lake'],
  },
  {
    note: "“How well we communicate is determined not by how well we say things, but how well we are understood.” – Andrew Grove",
    collection_id: 1,
  },
  {
    note: "“Any intelligent fool can make things bigger and more complex. It takes a touch of genius—and a lot of courage—to move in the opposite direction.” – E. F. Schumacher",
    collection_id: 1,
  },
  {
    title: "Windwaker",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_filename: 'windwaker.jpg',
    image_width: 1920,
    image_height: 2307,
    label_names: ['Sea', 'Ocean', 'Outdoors', 'Nature', 'Water', 'Shoreline', 'Land', 'Coast', 'Legend of Zelda'],
  },
  {
    title: "A-frame in the woods",
    note: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
    collection_id: 2,
    image_filename: 'a-frame.jpg',
    image_width: 731,
    image_height: 882,
    label_names: ['Art', 'Outdoors', 'Forest', 'Tree', 'Cabin', 'Window', 'Twig', 'Triangle', 'Sunlight'],
  },
]

snippets_data.each do |data|
  snippet_hash = {}

  snippet_hash[:title] = data[:title] if data[:title]
  snippet_hash[:note] = data[:note] if data[:note]
  snippet_hash[:link] = data[:link] if data[:link]
  snippet_hash[:collection_id] = data[:collection_id] if data[:collection_id]
  snippet_hash[:image_width] = data[:image_width] if data[:image_width]
  snippet_hash[:image_height] = data[:image_height] if data[:image_height]

  created_snippet = Snippet.create!(snippet_hash)
  
  if data[:image_filename]
    created_snippet.image.attach(
      io: File.open(Rails.root.join("app/assets/images/#{data[:image_filename]}")), 
      filename: data[:image_filename]
    )
  end

  if data[:label_names]
    data[:label_names].each do |label_name|
      created_label = Label.create!(name: label_name)
      created_snippet.labels.append(created_label)
    end
  end
end

puts "Created #{Snippet.count} snippets."
puts "Created #{Label.count} labels."
