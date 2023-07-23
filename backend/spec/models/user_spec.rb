require 'rails_helper'

RSpec.describe User do
  let(:user) { User.new(email: 'foobar@example.com', password: 'foobar') }

  it 'is valid with valid attributes' do
    expect(user).to be_valid
  end

  it 'is invalid with too short password' do
    user.password = '-'
    expect(user).not_to be_valid
  end

  it 'is invalid with too long password' do
    user.password = '-' * 21
    expect(user).not_to be_valid
  end

  it 'is invalid with uncorrect email format' do
    user.email = 'foobar'
    expect(user).not_to be_valid
  end

  it 'is invalid with duplicated email' do
    user.save
    dup_user = user.dup
    expect(dup_user).not_to be_valid
  end

  it 'is invalid with empty email' do
    user.email = ''
    expect(user).not_to be_valid
  end

  it 'has password_digest instead' do
    expect(user.password_digest).to be_present
    expect(user.password_digest).not_to eq('foobar')
    expect(user.password).to eq('foobar')
  end
end
