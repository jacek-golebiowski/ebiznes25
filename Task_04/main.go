package main

import (
    "net/http"
    "strconv"

    "github.com/labstack/echo/v4"
    "gorm.io/driver/sqlite"
    "gorm.io/gorm"
    "github.com/jacek-golebiowski/ebiznes25/Task_04/models"

)

func main() {
    db, err := gorm.Open(sqlite.Open("app.db"), &gorm.Config{})
    if err != nil {
        panic("failed to connect database")
    }

    db.AutoMigrate(&models.Product{})

    e := echo.New()

    e.GET("/products", func(c echo.Context) error {
        var products []models.Product
        db.Find(&products)
        return c.JSON(http.StatusOK, products)
    })

    e.POST("/products", func(c echo.Context) error {
        p := new(models.Product)
        if err := c.Bind(p); err != nil {
            return c.JSON(http.StatusBadRequest, echo.Map{"error": err.Error()})
        }
        db.Create(&p)
        return c.JSON(http.StatusCreated, p)
    })

    e.GET("/products/:id", func(c echo.Context) error {
        id, _ := strconv.Atoi(c.Param("id"))
        var p models.Product
        if err := db.First(&p, id).Error; err != nil {
            return c.JSON(http.StatusNotFound, echo.Map{"error": "not found"})
        }
        return c.JSON(http.StatusOK, p)
    })

    e.PUT("/products/:id", func(c echo.Context) error {
        id, _ := strconv.Atoi(c.Param("id"))
        var p models.Product
        if err := db.First(&p, id).Error; err != nil {
            return c.JSON(http.StatusNotFound, echo.Map{"error": "not found"})
        }
        if err := c.Bind(&p); err != nil {
            return c.JSON(http.StatusBadRequest, echo.Map{"error": err.Error()})
        }
        db.Save(&p)
        return c.JSON(http.StatusOK, p)
    })

    e.DELETE("/products/:id", func(c echo.Context) error {
        id, _ := strconv.Atoi(c.Param("id"))
        db.Delete(&models.Product{}, id)
        return c.NoContent(http.StatusNoContent)
    })

    e.Logger.Fatal(e.Start(":1323"))
}
