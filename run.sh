#!/bin/bash
cd "$(dirname "$0")"

python3 -c "
import http.server, socketserver, socket, os, sys

os.chdir('$(pwd)')

def get_ip():
    s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
    try:
        s.connect(('8.8.8.8', 80))
        return s.getsockname()[0]
    except:
        return '0.0.0.0'
    finally:
        s.close()

ip = get_ip()

class H(http.server.SimpleHTTPRequestHandler):
    extensions_map = {**http.server.SimpleHTTPRequestHandler.extensions_map, '.js': 'application/javascript', '.json': 'application/json'}
    def log_message(self, f, *a): pass

socketserver.TCPServer.allow_reuse_address = True
with socketserver.TCPServer(('0.0.0.0', 8000), H) as s:
    print(f'Сервер: http://{ip}:8000')
    print(f'Открой на телефоне: http://{ip}:8000')
    print(f'Остановка: Ctrl+C')
    s.serve_forever()
"
