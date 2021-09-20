class CreateBlogCategoryJoinTable < ActiveRecord::Migration[6.1]
  def change
    create_join_table :blogs, :categories do |t|
      t.index :blog_id
      t.index :category_id
  end
end
