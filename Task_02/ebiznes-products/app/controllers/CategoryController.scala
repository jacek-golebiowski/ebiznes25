package controllers

import play.api.mvc._
import javax.inject._
import play.api.libs.json._
import models.Category

import scala.collection.mutable.ListBuffer

@Singleton
class CategoryController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val categories = ListBuffer(
    Category(1, "Laptops"),
    Category(2, "Phones")
  )

  def getAll = Action {
    Ok(Json.toJson(categories))
  }

  def getById(id: Int) = Action {
    categories.find(_.id == id) match {
      case Some(c) => Ok(Json.toJson(c))
      case None => NotFound(Json.obj("error" -> "Category not found"))
    }
  }

  def add = Action(parse.json) { request =>
    request.body.validate[Category].fold(
      _ => BadRequest(Json.obj("error" -> "Invalid category")),
      category => {
        categories += category
        Created(Json.toJson(category))
      }
    )
  }

  def update(id: Int) = Action(parse.json) { request =>
    request.body.validate[Category].fold(
      _ => BadRequest(Json.obj("error" -> "Invalid category")),
      updated => {
        categories.indexWhere(_.id == id) match {
          case -1 => NotFound(Json.obj("error" -> "Category not found"))
          case i =>
            categories.update(i, updated)
            Ok(Json.toJson(updated))
        }
      }
    )
  }

  def delete(id: Int) = Action {
    categories.indexWhere(_.id == id) match {
      case -1 => NotFound(Json.obj("error" -> "Category not found"))
      case i =>
        val removed = categories.remove(i)
        Ok(Json.toJson(removed))
    }
  }
}
