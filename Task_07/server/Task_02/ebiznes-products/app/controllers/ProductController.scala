package controllers

import play.api.mvc._
import javax.inject._
import play.api.libs.json._
import models.Product

import scala.collection.mutable.ListBuffer

@Singleton
class ProductController @Inject() (val controllerComponents: ControllerComponents)
    extends BaseController {

  private val products = ListBuffer(
    Product(1, "MacBook Pro", 9999.99),
    Product(2, "iPhone", 4999.99)
  )

  def getAll = Action {
    Ok(Json.toJson(products))
  }

  def getById(id: Int) = Action {
    products.find(_.id == id) match {
      case Some(product) => Ok(Json.toJson(product))
      case None          => NotFound(Json.obj("error" -> "getById - Product not found"))
    }
  }

  def add = Action(parse.json) { request =>
    request.body
      .validate[Product]
      .fold(
        errors => BadRequest(Json.obj("error" -> "add - Invalid product")),
        product => {
          products += product
          Created(Json.toJson(product))
        }
      )
  }

  def update(id: Int) = Action(parse.json) { request =>
    request.body
      .validate[Product]
      .fold(
        errors => BadRequest(Json.obj("error" -> "update - Invalid product")),
        updatedProduct => {
          products.indexWhere(_.id == id) match {
            case -1 => NotFound(Json.obj("error" -> "update - Product not found"))
            case i  =>
              products.update(i, updatedProduct)
              Ok(Json.toJson(updatedProduct))
          }
        }
      )
  }

  def delete(id: Int) = Action {
    products.indexWhere(_.id == id) match {
      case -1 => NotFound(Json.obj("error" -> "delete - Product not found"))
      case i  =>
        val deleted = products.remove(i)
        Ok(Json.toJson(deleted))
    }
  }
}
