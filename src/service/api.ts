const URL = process.env.NEXT_PUBLIC_API_URL;

export interface Komik {
    id: number;
    title: string;
    alternative: string;
    description: string;
    imgUrl: string;
    type: string;
    status: string;
    release: string;
    created_at: string;
    updated_at: string;
  }

export async function Login(username: string, password: string) {
    try {
        const response = await fetch(`${URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: username,
                password: password,
            }),
        });

        if (response.ok) {
            const data = await response.json();
            return data; 
        } else {
            const errorData = await response.json();
            throw new Error(errorData.message || "Login failed");
        }
    } catch (error) {
        console.error("Error during login:", error);
        throw error; 
    }
}

export interface Komik {
    id: number;
    title: string;
    alternative: string;
    description: string;
    imgUrl: string;
    type: string;
    status: string;
    release: string;
    created_at: string;
    updated_at: string;
  }
  
  export async function getKomik(page = 1, limit = 10): Promise<Komik[]> {
    try {
      const apiUrl = `${URL}/series?page=${page}&limit=${limit}`;
      const response = await fetch(apiUrl, {
        method: "GET",
        headers: {
          accept: "*/*",
        },
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch komik data");
      }
  
      const json = await response.json();
      return json.data;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
  