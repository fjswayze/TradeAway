class User < ApplicationRecord 
    attr_reader :password
    validates :email, presence: true, uniqueness: true 
    validates :password, length: {minimum: 6, allow_nil: true}
     validates :session_token, presence: true, uniqueness: true 
    after_initialize :ensure_session_token, :ensure_profile_picture, :ensure_user_name, :ensure_channel_id

     def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def self.find_by_credentials(email, password) 
         
        user = User.find_by(email: email)
        return nil unless user 
        user.is_password?(password) ? user : nil 
    end
    
    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token 
        self.session_token ||= SecureRandom.base64(64)
        self.save
        self.session_token
    end

    def ensure_session_token
        self.session_token ||=   SecureRandom.base64(64)
    end

end