class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  belongs_to :role

  def role?(role)
    self.role.name == role.to_s
  end

  #attr_accessible :email, :password, :password_confirmation, :remember_me
end
