from fastapi.testclient import TestClient

from backend.app.main import app

client = TestClient(app)


def test_health() -> None:
    response = client.get("/api/health")
    assert response.status_code == 200
    assert response.json()["brand"] == "柑叙乌云"


def test_products_include_six_core_categories() -> None:
    response = client.get("/api/products")
    assert response.status_code == 200
    assert len(response.json()) == 6


def test_events_are_available() -> None:
    response = client.get("/api/events")
    assert response.status_code == 200
    assert response.json()[0]["status"] == "active"


def test_store_includes_songjiang_address() -> None:
    response = client.get("/api/store")
    assert response.status_code == 200
    payload = response.json()
    assert payload["address"] == "上海市松江区叶榭镇451弄一号一层"
    assert payload["phone"] == "17721093282"
