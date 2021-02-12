class CreateUser < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username
      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :session_token
      t.float :available_funds 
      t.timestamps
    end
    add_index :users, :username
    add_index :users, :email 
    add_index :users, :session_token
  end
end
