require 'rails_helper'

# create comes from FactoryBot

RSpec.describe Snippet, type: :model do
  # pending "add some examples to (or delete) #{__FILE__}"
  describe "When a snippet is created" do
    let(:snippet) { create(:snippet, title: 'my title', note: 'my note') }
    
    it "should have a title" do
      expect(snippet.title).to eq("my title")
    end

    it "should have a note" do
      expect(snippet.note).to eq("my note")
    end
  end

  describe "When a snippet is created without a title, note, or image" do
    it "should fail to create a snippet" do
      snippet = Snippet.new
      expect(snippet.save).to eq(false)
    end
  end
end
