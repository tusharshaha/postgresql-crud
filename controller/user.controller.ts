import prisma from "../db/db.config";

export async function createUser(req: any, res: any) {
  try {
    const { name, email, password } = req.body;
    await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });
    res.status(200).json({
      message: "user created successfully",
    });
  } catch (error: any) {
    console.log(error.message .bgred);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function getUser(req: any, res: any){
  try {
    const users = await prisma.user.findMany({});
    res.status(200).json(users)
  } catch (error: any) {
    console.log(error.message .bgred);
    res.status(500).json({ message: "Something went wrong" });
  }
}

export async function findUser(req: any, res: any){
  try {
    const user = await prisma.user.findUnique({where: {email: req.query.email}})
    res.status(200).json(user)
  } catch (error: any) {
    console.log(error.message .bgred);
    res.status(500).json({ message: "Something went wrong" });
  }
}
