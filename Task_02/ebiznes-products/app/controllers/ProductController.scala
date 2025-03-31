package controllers

import play.api.mvc._
import javax.inject._

@Singleton
class ProductController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  def index(): Action[AnyContent] = Action {
    Ok("Product controller works!")
  }
}
