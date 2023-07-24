Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins ENV.fetch("PROD_ALLOWED_HOSTS") do
      ["http://localhost:8000",
      "http://localhost:3000",
      "https://hwng-renec-video-sharing.surge.sh/"]
    end

    resource "*",
      headers: :any,
      methods: [:get, :post, :put, :patch, :delete, :options, :head],
      credentials: true
  end
end
