package models

case class CartItem(id: Int, productId: Int, quantity: Int)

import play.api.libs.json.{Json, OFormat}

object CartItem {
  implicit val format: OFormat[CartItem] = Json.format[CartItem]
}
