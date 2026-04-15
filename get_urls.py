import os
import urllib.parse

# 1. 你的配置信息
DOMAIN = "https://no-chicken.com"
DIST_DIR = "./.vitepress/dist"  # GitHub Actions 编译产物的默认输出路径

# 2. 定义需要 CDN 刷新的资源后缀
# 我们跳过 .html 和 .json，因为你已经设置了它们“不缓存”
TARGET_EXTENSIONS = (
    '.png', '.jpg', '.jpeg', '.gif', '.webp', '.ico',
    '.exe', '.zip', '.bin', '.pdf'
)

def generate_cdn_urls():
    if not os.path.exists(DIST_DIR):
        print(f"❌ 错误: 找不到目录 {DIST_DIR}，请确保已经执行了 npm run build")
        return

    urls = []

    # 3. 递归遍历目录
    for root, dirs, files in os.walk(DIST_DIR):
        for file in files:
            if file.lower().endswith(TARGET_EXTENSIONS):
                # 获取相对于 dist 的相对路径
                relative_path = os.path.relpath(os.path.join(root, file), DIST_DIR)

                # 转换 Windows 路径分隔符为网络路径分隔符 /
                web_path = relative_path.replace("\\", "/")

                # 对中文文件名进行编码处理，防止 CDN 识别报错
                encoded_path = urllib.parse.quote(web_path)

                full_url = f"{DOMAIN}/{encoded_path}"
                urls.append(full_url)

    # 4. 写入文件
    output_file = "cdn_urls.txt"
    with open(output_file, "w", encoding="utf-8") as f:
        f.write("\n".join(urls))

    print(f"✅ 成功提取了 {len(urls)} 个资源 URL！")
    print(f"📄 结果已保存至: {os.path.abspath(output_file)}")
    print(f"💡 提示: 请将此文件内容复制到腾讯云 CDN 的“URL 刷新”中。")

if __name__ == "__main__":
    generate_cdn_urls()
