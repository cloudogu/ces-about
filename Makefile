VERSION=0.2.2
target_dir=target
page_root=info

.DEFAULT_GOAL=package

.PHONY: package
package:
	mkdir -p ${target_dir}/${page_root}
	cp -r src/* ${target_dir}/${page_root}
	cp -r node_modules/ces-theme/dist/css ${target_dir}/${page_root}/assets/
	cp -r node_modules/ces-theme/dist/images ${target_dir}/${page_root}/assets/
	tar -czvf ${target_dir}/ces-about_${VERSION}.tar.gz --directory ${target_dir} ${page_root}
	sha256sum ${target_dir}/ces-about_${VERSION}.tar.gz | head -c 64 > ${target_dir}/ces-about_${VERSION}.tar.gz.sha256

.PHONY: clean
clean:
	rm -rf ${target_dir}
