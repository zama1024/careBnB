require 'bcrypt'
class User < ActiveRecord::Base
  attr_reader :password
  validates :email, :password_digest, :session_token, presence: true
  validates :email, :session_token, uniqueness: true
  after_initialize :ensure_session_token
  validates :password, length: {minimum: 6}, allow_nil: :true

  has_many :listings,
  class_name: "Listing",
  foreign_key: :host_id,
  primary_key: :id

  has_many :reviews,
  class_name: "Review",
  foreign_key: :author_id,
  primary_key: :id

  has_many :bookings,
  class_name: "Booking",
  foreign_key: :user_id,
  primary_key: :id

  def self.find_by_credentials(credentials)
    user = User.find_by(email: credentials[:email])
    user && user.is_password?(credentials[:password]) ? user : nil
  end

  def self.random_token
    SecureRandom.urlsafe_base64
  end

  def is_password?(password)
    password_digest.is_password?(password)
  end

  def password_digest
    BCrypt::Password.new(super)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
    password
  end

  def reset_session_token!
    update(session_token: User.random_token)
    session_token
  end

  private

  def ensure_session_token
    self.session_token ||= User.random_token
  end

end
