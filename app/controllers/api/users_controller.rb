class Api::UsersController < ApplicationController 

    skip_before_action :verify_authenticity_token, raise: false 
    
    def create  
        @user = User.new(user_params) 
        if @user.save 
            log_in!(@user)
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end



    def update 
        
        @user = User.find(params[:id])
        
        if @user.update(user_params)
            
            render :show 
        else
            render json: @user.errors.full_messages, status: 422
        end
    end



    def user_params 
        params.require(:user).permit(:password, :username, :email, :first_name, :last_name, :available_funds)
    end
    
end
