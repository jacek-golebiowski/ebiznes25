package models

case class Product(id: Int, name: String, price: Double)

import play.api.libs.json.{Json, OFormat}

object Product {
  implicit val format: OFormat[Product] = Json.format[Product]
}
