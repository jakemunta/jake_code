class Ability
  include CanCan::Ability

  def initialize(user)
    user ||= User.new

    if user.role?(:administrator)
      can :manage, :all
    else
      can :read, :all
      can :create, ProductReview
    end
  end
end