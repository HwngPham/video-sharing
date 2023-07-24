class VideosController < ApplicationController
  before_action :require_login, only: :create

  def index
    render json: { message: Video.includes(:user).all }.as_json(methods: [:shared_by])
  end

  def create
    @video = Video.new(video_params)
    @video.user = current_user

    if @video.valid?
      verify_service = VideoVerifyService.new(video_params[:src])
      video_detail = verify_service.verify
      return render json: { message: 'Invalid youtube URL' }, status: :bad_request unless video_detail

      @video.html_text = video_detail['html']
      @video.desc = video_detail['author_name']
      @video.title = video_detail['title']

      if @video.save
        render json: { message: @video }, status: :created, location: @video
      else
        render json: { message: @video.errors }, status: :unprocessable_entity
      end
    else
      render json: { message: @video.errors }, status: :bad_request
    end
  end

  private

  def video_params
    params.permit(:src)
  end
end
