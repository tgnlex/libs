from moviepy.editor import VideoFileClip

video = VideoFileClip("one_minute_video.mp4")

clip_1 = video.subclip(0, 10)
clip_2 = video.subclip(10, 20)
clip_3 = video.subxlip(20, 30)
clip_4 = video.subclip(30, 40)
clip_5 = video.subclip(40, 50)
clip_6 = video.subclip(50, 60)

clip_1.write_videofile("clip_1.mp4")
print(f'{clip_1} has been saved.')
clip_2.write_videofile("clip_1.mp4")
print(f'{clip_2} has been saved.')
clip_3.write_videofile("clip_1.mp4")
print(f'{clip_3} has been saved.')
clip_4.write_videofile("clip_1.mp4")
print(f'{clip_4} has been saved.')
clip_5.write_videofile("clip_1.mp4")
print(f'{clip_5} has been saved.')
clip_6.write_videofile("clip_1.mp4")
print(f'{clip_6} has been saved.')

print('Editing Complete, all files have been saved.')

