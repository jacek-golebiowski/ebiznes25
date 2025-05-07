package controllers

import play.api.mvc._
import javax.inject._
import play.api.libs.json._
import models.CartItem

import scala.collection.mutable.ListBuffer

@Singleton
class CartController @Inject()(val controllerComponents: ControllerComponents) extends BaseController {

  private val cartItems = ListBuffer(
    CartItem(1, 1, 2), // 2x MacBook Pro
    CartItem(2, 2, 1)  // 1x iPhone
  )

  def getAll = Action {
    Ok(Json.toJson(cartItems))
  }

  def getById(id: Int) = Action {
    cartItems.find(_.id == id) match {
      case Some(item) => Ok(Json.toJson(item))
      case None => NotFound(Json.obj("error" -> "getById - Item not found"))
    }
  }

  def add = Action(parse.json) { request =>
    request.body.validate[CartItem].fold(
      _ => BadRequest(Json.obj("error" -> "add - Invalid cart item")),
      item => {
        cartItems += item
        Created(Json.toJson(item))
      }
    )
  }

  def update(id: Int) = Action(parse.json) { request =>
    request.body.validate[CartItem].fold(
      _ => BadRequest(Json.obj("error" -> "update - Invalid cart item")),
      updated => {
        cartItems.indexWhere(_.id == id) match {
          case -1 => NotFound(Json.obj("error" -> "update - Item not found"))
          case i =>
            cartItems.update(i, updated)
            Ok(Json.toJson(updated))
        }
      }
    )
  }

  def delete(id: Int) = Action {
    cartItems.indexWhere(_.id == id) match {
      case -1 => NotFound(Json.obj("error" -> "delete - Item not found"))
      case i =>
        val removed = cartItems.remove(i)
        Ok(Json.toJson(removed))
    }
  }
}
