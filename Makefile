VERSION=0.3.0
target_dir=target
page_root=info

.DEFAULT_GOAL=package

.PHONY: package
package:
	mkdir -p ${target_dir}/${page_root}
	cp -r src/* ${target_dir}/${page_root}
	cp -r node_modules/ces-theme/dist/css ${target_dir}/${page_root}/assets/
	cp -r node_modules/ces-theme/dist/images ${target_dir}/${page_root}/assets/
	tar -czvf ${target_dir}/ces-about_v${VERSION}.tar.gz --directory ${target_dir} ${page_root}
	sha256sum ${target_dir}/ces-about_v${VERSION}.tar.gz | head -c 64 > ${target_dir}/ces-about_v${VERSION}.tar.gz.sha256

.PHONY: dev-server
dev-server: package
	docker stop ces-about || true
	docker build -t ces-about:${VERSION} .
	docker run --rm -d -p 4200:80 --name ces-about -v "./${target_dir}":/usr/share/nginx/html ces-about:${VERSION}
	@echo "open http://localhost:4200/info in your browser"

.PHONY: clean
clean:
	rm -rf ${target_dir}
