#!/bin/bash
protoc --proto_path=app/proto app/proto/**.proto --js_out=app/pb
