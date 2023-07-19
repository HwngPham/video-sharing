class VideosController < ApplicationController
  before_action :set_video, only: %i[ show update destroy ]

  def index
    render json: Video.all
  end

  def show
    render json: @video
  end

  def create
    @video = Video.new(video_params)

    if @video.save
      render json: @video, status: :created, location: @video
    else
      render json: @video.errors, status: :unprocessable_entity
    end
  end

  private
    def set_video
      @video = Video.find(params[:id])
    end

    def video_params
      params.require(:video).permit(:title, :src, :desc)
    end
end
