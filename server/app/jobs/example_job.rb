class ExampleJob < ApplicationJob
  queue_as :default

  def perform(*args)
    # do all of the work with rekognition here

    # photo = 'app/assets/images/canyon.jpg'
    # path = File.expand_path(photo) # expand path relative to the current directory
    # file = File.read(path) # convert image to base64
    
    # puts "----------------------------"
    
    # client = Aws::Rekognition::Client.new
    
    # response = client.detect_labels({
    #   image: {
    #     bytes: file,
    #   }, 
    #   max_labels: 10, 
    #   min_confidence: 70, 
    # })
    
    # puts response.to_h
    
    # puts "----------------------------"
      
    # Do something later
    puts "hello world!"
    puts args
  end
end
