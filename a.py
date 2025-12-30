import os
from pathlib import Path

ROOT_DIR = Path("./src/assets/langdiem2025")  # đổi thành folder gốc của bạn

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".webp", ".bmp", ".gif"}


def rename_images_in_subfolders(root_dir: Path):
    if not root_dir.exists():
        print(f"Folder {root_dir} không tồn tại!")
        return

    for subfolder in root_dir.iterdir():
        if not subfolder.is_dir():
            continue  # bỏ qua file, chỉ xử lý folder

        folder_name = subfolder.name
        index = 0

        # Lấy danh sách file ảnh
        images = [
            f for f in subfolder.iterdir()
            if f.is_file() and f.suffix.lower() in IMAGE_EXTS
        ]

        for img in images:
            # Nếu file đã đúng tên dạng foldernameX.png thì bỏ qua
            expected_name = f"{folder_name}{index}.png"
            if img.name == expected_name:
                print(f"Đúng tên: {img.name}, bỏ qua")
                index += 1
                continue

            # Tăng số index cho tới khi tên mới chưa tồn tại
            while True:
                new_name = f"{folder_name}{index}.png"
                new_path = subfolder / new_name
                if not new_path.exists():
                    break
                index += 1

            # Rename file
            img.rename(new_path)
            print(f"Renamed: {img.name} -> {new_name}")
            index += 1

if __name__ == "__main__":
    rename_images_in_subfolders(ROOT_DIR)