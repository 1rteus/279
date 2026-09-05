import http.server
import socketserver
import socket
import os

PORT = 8000
os.chdir(os.path.dirname(os.path.abspath(__file__)))

def get_local_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
    except:
        ip = "127.0.0.1"
    finally:
        s.close()
    return ip

ip = get_local_ip()

handler = http.server.SimpleHTTPRequestHandler
handler.extensions_map.update({
    ".js": "application/javascript",
    ".json": "application/json",
    ".png": "image/png",
    ".svg": "image/svg+xml",
})

with socketserver.TCPServer((ip, PORT), handler) as httpd:
    print(f"Сервер запущен!")
    print(f"Открой на телефоне: http://{ip}:{PORT}")
    print(f"Только устройства в WiFi: {ip}/24")
    print(f"Остановка: Ctrl+C")
    httpd.serve_forever()
