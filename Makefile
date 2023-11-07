VERSION=0.4.0
target_dir=target
page_root=info

.DEFAULT_GOAL=package

.PHONY: package
package:
	mkdir -p ${target_dir}/${page_root}
	cp -r src/* ${target_dir}/${page_root}
	cp -r node_modules/ces-theme/dist/css ${target_dir}/${page_root}/assets/
	mkdir -p ${target_dir}/${page_root}/assets/images
	cp -r node_modules/ces-theme/dist/images/logo/blib-blue-160px.png \
	node_modules/ces-theme/dist/images/logo/blib-white-30px.png \
	node_modules/ces-theme/dist/images/favicon/favicon.ico ${target_dir}/${page_root}/assets/images/
	mkdir -p ${target_dir}/routes
	cp ces-about-routes.conf ${target_dir}/routes/
	tar -czvf ${target_dir}/ces-about_v${VERSION}.tar.gz --directory ${target_dir} ${page_root} routes
	sha256sum ${target_dir}/ces-about_v${VERSION}.tar.gz | head -c 64 > ${target_dir}/ces-about_v${VERSION}.tar.gz.sha256

.PHONY: dev-server
dev-server: package
	docker stop ces-about || true
	docker build -t ces-about:${VERSION} .
	docker run -d --rm -p 80:80 --name ces-about \
		-v "./${target_dir}":/usr/share/nginx/html \
		-v "./ces-about-routes.conf":/etc/nginx/include.d/ces-about-routes.conf \
		-v "./default.conf":/etc/nginx/conf.d/default.conf \
		ces-about:${VERSION}
	@echo "open http://localhost/info/ in your browser"

.PHONY: clean
clean:
	rm -rf ${target_dir}
	docker stop ces-about
	docker rm ces-about

#
