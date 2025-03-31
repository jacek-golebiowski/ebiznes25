package models

case class Category(id: Int, name: String)

import play.api.libs.json.{Json, OFormat}

object Category {
  implicit val format: OFormat[Category] = Json.format[Category]
}
