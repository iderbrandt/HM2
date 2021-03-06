USE [ChurchDb]
GO
/****** Object:  Table [dbo].[Church]    Script Date: 4/5/2018 10:33:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Church](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[LocatedInCityId] [int] NOT NULL,
	[BuiltYear] [int] NOT NULL,
 CONSTRAINT [PK_Church] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Citizen]    Script Date: 4/5/2018 10:33:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Citizen](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[LivesInCityId] [int] NULL,
 CONSTRAINT [PK_Citizen] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[City]    Script Date: 4/5/2018 10:33:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[City](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_City] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[FavoriteChurch]    Script Date: 4/5/2018 10:33:58 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[FavoriteChurch](
	[ChurchId] [int] NOT NULL,
	[CitizenId] [int] NOT NULL,
 CONSTRAINT [PK_FavoriteChurch] PRIMARY KEY CLUSTERED 
(
	[ChurchId] ASC,
	[CitizenId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Church] ON 

INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (1, N'Oscar-Fredriks kyrka', 1, 1893)
INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (2, N'Sankt Georgios kyrka', 2, 1890)
INSERT [dbo].[Church] ([Id], [Name], [LocatedInCityId], [BuiltYear]) VALUES (3, N'Matteus kyrka', 3, 1892)
SET IDENTITY_INSERT [dbo].[Church] OFF
SET IDENTITY_INSERT [dbo].[Citizen] ON 

INSERT [dbo].[Citizen] ([Id], [Name], [LivesInCityId]) VALUES (1, N'Linnea', 1)
INSERT [dbo].[Citizen] ([Id], [Name], [LivesInCityId]) VALUES (2, N'Harry', 2)
SET IDENTITY_INSERT [dbo].[Citizen] OFF
SET IDENTITY_INSERT [dbo].[City] ON 

INSERT [dbo].[City] ([Id], [Name]) VALUES (1, N'Göteborg')
INSERT [dbo].[City] ([Id], [Name]) VALUES (2, N'Stockholm')
INSERT [dbo].[City] ([Id], [Name]) VALUES (3, N'Norrköping')
SET IDENTITY_INSERT [dbo].[City] OFF
INSERT [dbo].[FavoriteChurch] ([ChurchId], [CitizenId]) VALUES (1, 1)
INSERT [dbo].[FavoriteChurch] ([ChurchId], [CitizenId]) VALUES (3, 1)
INSERT [dbo].[FavoriteChurch] ([ChurchId], [CitizenId]) VALUES (3, 2)
ALTER TABLE [dbo].[Church]  WITH CHECK ADD  CONSTRAINT [FK_Church_City] FOREIGN KEY([LocatedInCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Church] CHECK CONSTRAINT [FK_Church_City]
GO
ALTER TABLE [dbo].[Citizen]  WITH CHECK ADD  CONSTRAINT [FK_Citizen_City] FOREIGN KEY([LivesInCityId])
REFERENCES [dbo].[City] ([Id])
GO
ALTER TABLE [dbo].[Citizen] CHECK CONSTRAINT [FK_Citizen_City]
GO
ALTER TABLE [dbo].[FavoriteChurch]  WITH CHECK ADD  CONSTRAINT [FK_FavoriteChurch_Church] FOREIGN KEY([ChurchId])
REFERENCES [dbo].[Church] ([Id])
GO
ALTER TABLE [dbo].[FavoriteChurch] CHECK CONSTRAINT [FK_FavoriteChurch_Church]
GO
ALTER TABLE [dbo].[FavoriteChurch]  WITH CHECK ADD  CONSTRAINT [FK_FavoriteChurch_Citizen] FOREIGN KEY([CitizenId])
REFERENCES [dbo].[Citizen] ([Id])
GO
ALTER TABLE [dbo].[FavoriteChurch] CHECK CONSTRAINT [FK_FavoriteChurch_Citizen]
GO
