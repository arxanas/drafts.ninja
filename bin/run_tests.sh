#!/bin/bash
set -euo pipefail

readonly SELENIUM_URL='http://selenium-release.storage.googleapis.com/2.53/selenium-server-standalone-2.53.0.jar'
readonly SELENIUM='bin/selenium-standalone.jar'
readonly NIGHTWATCH='./node_modules/nightwatch/bin/nightwatch'

main() {
    make
    launch_server
    download_selenium
    "$NIGHTWATCH"
}

download_selenium() {
    if [[ ! -f "$SELENIUM" ]]; then
        curl "$SELENIUM_URL" -o "$SELENIUM"
    fi
}

launch_server() {
    node app &
    local app_pid=$!
    trap "kill $app_pid" EXIT

    local i=0
    while ! curl localhost:1337 >/dev/null; do
        echo 'Waiting for server to start...'
        sleep 1
        i=$((i + 1))
        if [[ "$i" -gt 10 ]]; then
            echo 'Gave up waiting for server to start'
            exit 1
        fi
    done
}

main
