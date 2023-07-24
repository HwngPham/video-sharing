class VideosController < ApplicationController
  before_action :require_login, only: :create

  def index
    render json: Video.all
  end

  def create
    @video = Video.new(video_params)
    @video.user = current_user

    if @video.save
      render json: { message: @video }, status: :created, location: @video
    else
      render json: { message: @video.errors }, status: :unprocessable_entity
    end
  end

  private

  def video_params
    params.permit(:src)
  end
end
