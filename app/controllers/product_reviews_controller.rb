class ProductReviewsController < ApplicationController
  before_action :set_product_review, only: [:show, :edit, :update, :destroy]
  before_filter :authenticate_user!, except: [:index, :show]

  # GET /product_reviews
  # GET /product_reviews.json
  def index
    @product_reviews = ProductReview.all
  end

  # GET /product_reviews/1
  # GET /product_reviews/1.json
  def show
  end

  # GET /product_reviews/new
  def new
    @product_review = ProductReview.new(:product_id => params[:product_id])
  end

  # GET /product_reviews/1/edit
  def edit
  end

  # POST /product_reviews
  # POST /product_reviews.json
  def create
    @product = Product.where(:id => product_review_params[:product_id]).first
    @product_review = @product.product_reviews.build(product_review_params)
    if @product_review.save
      respond_to do |format|
        format.html { render(:text => "not implemented") }
        format.js
      end
    end
  end

  # PATCH/PUT /product_reviews/1
  # PATCH/PUT /product_reviews/1.json
  def update
    respond_to do |format|
      if @product_review.update(product_review_params)
        format.html { redirect_to @product_review, notice: 'Product review was successfully updated.' }
        format.json { render :show, status: :ok, location: @product_review }
      else
        format.html { render :edit }
        format.json { render json: @product_review.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /product_reviews/1
  # DELETE /product_reviews/1.json
  def destroy
    @product_review.destroy
    respond_to do |format|
      format.html { redirect_to product_reviews_url, notice: 'Product review was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_product_review
      @product_review = ProductReview.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def product_review_params
      params.require(:product_review).permit(:rating, :product_id, :user_id, :review)
    end
end
