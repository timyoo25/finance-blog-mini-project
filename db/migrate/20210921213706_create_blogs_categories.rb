class CreateBlogsCategories < ActiveRecord::Migration[6.1]
  def change
    create_table :blogs_categories, id: false do |t|
      t.integer :blog_id
      t.integer :category_id
    end
  end
end
