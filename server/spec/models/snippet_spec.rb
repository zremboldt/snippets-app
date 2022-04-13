require 'rails_helper'

RSpec.describe Snippet, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe "When a snippet is created" do
    let(:snippet) { create(:snippet, title: 'my title') }
    
    it "should have a title" do
      expect(snippet.title).to eq("my title")
    end
    # it "should have a note" do
    #   snippet = Snippet.new
    #   snippet.note = "Test Body"
    #   expect(snippet.note).to eq("Test Body")
    # end
  end

end
